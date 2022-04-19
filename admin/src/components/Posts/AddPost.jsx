import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WordContext } from "../context";
import parse from "html-react-parser";
import SideNavRight from "../SideNav/SideNavRight";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function AddPost({ toggleClass, previewPost }) {
  // Context
  const { currentAdmin, setCurrentAdmin, post, setPost } =
    useContext(WordContext);
  const [empty, setEmpty] = useState(false);
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState({
    owner: currentAdmin._id,
    body: "",
    title: "",
    subtitle: "",
    published: false,
    tags: [],
    categories: [],
    image: "",
  });

  useEffect(() => {
    setPost(data);
  }, [data]);

  const editorRef = useRef(null);
  const handlePublish = async () => {
    setEmpty(!empty);
    if (editorRef.current.getContent()) {
      console.log(
        "editorRef.current.getContent is:",
        editorRef.current.getContent()
      );

      console.log("data is", data);

      const response = await axios.post("/posts/add", data);

      console.log("response is from add post", response);

      setData({
        body: "",
        title: "",
        subtitle: "",
        published: false,
        tags: [],
        categories: [],
        image: "",
      });
    }
  };

  const handleEditorChange = () => {
    setData({ ...data, body: editorRef.current.getContent() });
  };

  return (
    <div className={`${toggleClass} container`}>
      <Box sx={{ "& > :not(style)": { m: 1 } }} className={toggleClass}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            value={data.title}
            id="input-with-sx"
            label="Type the title"
            variant="outlined"
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <TextField
            value={data.subtitle}
            id="input-with-sx"
            label="Subtitle"
            variant="outlined"
            className="mx-5"
            onChange={(e) => setData({ ...data, subtitle: e.target.value })}
          />
        </Box>
      </Box>

      <Editor
        apiKey="gpmdvbp4187t8cmi6k5czc6i7imf86b5z81tv1p0ep40aav7"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={data.body == "" ? "" : ""}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo | redo | formatselect | image " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
      <SideNavRight
        title={data.title}
        body={data.body}
        subtitle={data.subtitle}
        setTag={setTag}
        tag={tag}
        setData={setData}
        data={data}
        setCategory={setCategory}
        category={category}
        setImage={setImage}
        image={image}
        handlePublish={handlePublish}
      />
    </div>
  );
}
