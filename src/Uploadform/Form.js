import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../Firebase/Firebase";
import { toast } from "react-toastify";
import "./Form.css";
import Formnavbar from "./Formnavbar";

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Lastjob: "",
    Lastcompany: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.Name || !formData.Email || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          Name: "",
          Email: "",
          Lastjob: "",
          Lastcompany: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            Name: formData.Name,
            Email: formData.Email,
            Lastjob: formData.Lastjob,
            Lastcompany: formData.Lastcompany,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <>
      <div>
        <Formnavbar />
      </div>
      <div className="form">
        <h1>Apply</h1>
        <div className="form-group">
          <label htmlFor="">
            <center>Name ( Enter Full Name )</center>
          </label>
          <input
            type="text"
            name="Name"
            className="form-control"
            value={formData.Name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* description */}
        <label htmlFor="">Email</label>
        <input
          name="Email"
          className="form-control"
          value={formData.Email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Enter previous job position</label>
        <input
          name="Lastjob"
          className="form-control"
          value={formData.Lastjob}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">Enter the Company name of previous job </label>
        <input
          name="Lastcompany"
          className="form-control"
          value={formData.Lastcompany}
          onChange={(e) => handleChange(e)}
        />

        {/* image */}
        <label htmlFor="">Upload Resume (pdf or jpeg)</label>
        <input
          type="file"
          name="image"
          className="form-control"
          onChange={(e) => handleImageChange(e)}
        />

        {progress === 0 ? null : (
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped mt-2"
              style={{ width: `${progress}%` }}
            >
              {`uploading resume ${progress}%`}
            </div>
          </div>
        )}
        <button className="submitButton" onClick={handlePublish}>
          Apply
        </button>
      </div>
    </>
  );
};

export default Form;
