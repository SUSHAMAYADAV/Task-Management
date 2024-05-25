import { useEffect, useState } from "react";
//import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
function Modalform({ onClose, id }) {
  console.log("id value", id,onClose);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editStartTime, setEditStartTime] = useState("");
  const [editEndTime, setEditendTime] = useState("");
  useEffect(() => {
    let bb = JSON.parse(localStorage?.getItem("key"));
    for (let i = 0; i < bb?.length; i++) {
      if (bb[i].id === id) {
        console.log("the value inside useeffect",bb[i]);
        setEditTitle(bb[i].title);
        setEditDescription(bb[i].description);
        setEditDate(bb[i].date);
        setEditStartTime(bb[i].startTime);
        setEditendTime(bb[i].endtime);
      }
    }
  }, []);
  // console.log("the value of bb", bb);
  const dataDetails = {
    id: Math.floor(Math.random() * 10000000),
    title: title,
    description: description,
    date: date,
    starttime: startTime,
    endtime: endTime,
  };
  const submitButton = () => {
     console.log("the value of--->", dataDetails);

    if (
      title !== "" &&
      description !== "" &&
      date !== "" &&
      startTime !== "" &&
      endTime !== ""
    ) {
      if (localStorage.getItem("key")) {
        let newKey = JSON.parse(localStorage.getItem("key"));
        localStorage.setItem("key", JSON.stringify([...newKey, dataDetails]));
      } else {
        localStorage.setItem("key", JSON.stringify([dataDetails]));
      }
      alert(" added Successfully");
    } else {
      alert("this field is required");
    }
  };
  const inputStyle = {
    padding: "10px",
    borderRadius: "7px",
    border: "none",
    fontSize: "16px",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#1976D2",
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            rowGap: "0.5rem",
            boxShadow: "4px 5px 8px grey",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              rowGap: "0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                //backgroundColor: "red",
              }}
            >
              <div>
                <h3>Add Details</h3>
              </div>
              <div>
                <CancelOutlinedIcon
                  style={{ marginTop: "21px" }}
                  onClick={() => onClose(false)}
                />
              </div>
            </div>
            <label>Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={editTitle}
              style={inputStyle}
              type="text"
              placeholder="Title"
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              rowGap: "0.5rem",
            }}
          >
            <label>Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={editDescription}
              style={inputStyle}
              rows={4}
              cols={50}
              type="text"
              placeholder="description"
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              rowGap: "0.5rem",
            }}
          >
            <label>Date</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              defaultValue={editDate}
              style={inputStyle}
              type="date"
              placeholder="Date"
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              rowGap: "0.5rem",
            }}
          >
            <label>Start Time</label>
            <input
              onChange={(e) => setStartTime(e.target.value)}
              defaultValue={editStartTime}
              style={inputStyle}
              type="text"
              placeholder="Start-Time"
            />
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              rowGap: "0.5rem",
            }}
          >
            <label>End Time</label>
            <input
              onChange={(e) => setEndTime(e.target.value)}
              defaultValue={editEndTime}
              style={inputStyle}
              type="text"
              placeholder="End-Time"
            />
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#FFFFFF",
                border: "none",
                padding: "10px 225px 10px 230px",
                borderRadius: "7px",
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "16px",
              }}
              onClick={submitButton}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modalform;
