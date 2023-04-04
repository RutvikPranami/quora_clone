import React, { useEffect, useState } from "react";
import "../CSS/NavBar.css";
import {
  AssignmentTurnedInOutlined,
  CircleNotificationsRounded,
  ExpandMore,
  Link,
  FeaturedPlayListOutlined,
  HouseRounded,
  LanguageRounded,
  PeopleAltOutlined,
  PeopleAltRounded,
  SearchRounded,
} from "@mui/icons-material";
import { Avatar, Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import db from "../firebase";
import Modal from "react-modal";
import firebase from "firebase";
import { setSearchResults } from "../features/searchResultslice";

function NavBar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setSearchResults(String(inputSearch) || ""));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [inputSearch]);

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };
  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/archive/9/91/20170609154431%21Quora_logo_2015.svg"
          alt="Logo"
        />
      </div>
      <div className="qHeader__icons">
        <div className="qHeader__icon">
          <HouseRounded />
        </div>
        <div className="qHeader__icon">
          <FeaturedPlayListOutlined />
        </div>
        <div className="qHeader__icon">
          <AssignmentTurnedInOutlined />
        </div>
        <div className="qHeader__icon">
          <PeopleAltRounded />
        </div>
        <div className="qHeader__icon">
          <CircleNotificationsRounded />
        </div>
      </div>

      <div className="qHeader__input">
        <SearchRounded />
        <input
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="qHeade__Rem">
        <div title="Click to Logout" className="qHeader__Avtar">
          <Avatar
          src={user?.photo || ""}
            onClick={() => {
              auth.signOut(); 
            }}
            
          />
        </div>
        <LanguageRounded />
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add Question
        </Button>

        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Create Post</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user?.photo ||
                "https://t3.ftcdn.net/jpg/02/70/43/74/360_F_270437411_gU2TfrCFMM1zpQvAExGoinfcIgaOD7mk.jpg"
              }
            />
            <p>{user?.disPlayName || user?.email || ""} asked</p>
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              <Link />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button
              disabled={input.length === 0 ? true : false}
              type="sumbit"
              onClick={handleQuestion}
              className={`${input.length === 0 ? "disAdd" : "add"}`}
            >
              Add Question
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;
