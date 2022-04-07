import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WordContext } from "../context";
import parse from "html-react-parser";
import SideNavRight from "../SideNav/SideNavRight";

export default function AddPost({ toggleClass, previewPost }) {
  // Context
  const { currentAdmin, setCurrentAdmin, post, setPost } =
    useContext(WordContext);

  const [tag, setTag] = useState("");

  const [data, setData] = useState({
    owner: currentAdmin._id,
    body: "",
    title: "",
    subtitle: "",
    published: false,
    tags: [],
  });

  useEffect(() => {
    setPost(data);
    console.log("post is in useEffect", post);
  }, [data]);

  const editorRef = useRef(null);

  const handleSave = async () => {
    if (editorRef.current.getContent()) {
      console.log(
        "editorRef.current.getContent is:",
        editorRef.current.getContent()
      );

      console.log("data is", data);

      const response = await axios.post("/posts/add", data);

      console.log("response is from add post", response);
    }
  };

  const handleEditorChange = () => {
    setData({ ...data, body: editorRef.current.getContent() });
    console.log("post is", data);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();

    console.log("this is form submit");
    // add Tag to the data object at property tags.
    setData({ ...data, tags: [...data.tags, tag] });
    setTag("");
  };
  const handleDeleteTag = (idx) => {
    const oldData = { ...data };
    data.tags.splice(idx, 1);

    setData({ ...oldData });
  };
  return (
    <div className={`${toggleClass} container`}>
      <input
        placeholder="Type the title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
      />
      <input
        placeholder="Type the subtitle"
        value={data.subtitle}
        onChange={(e) => setData({ ...data, subtitle: e.target.value })}
      />

      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo | redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
      <div>
        <form onSubmit={handleTagSubmit}>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </form>
        <div style={{ display: "flex" }}>
          {data?.tags?.length
            ? data.tags.map((item, idx) => (
                <div
                  style={{ border: "1px solid", marginRight: "10px" }}
                  key={idx}
                >
                  {item}{" "}
                  <span
                    onClick={(e) => handleDeleteTag(idx)}
                    style={{ color: "red" }}
                  >
                    x
                  </span>
                </div>
              ))
            : "No tags added"}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/home">Home</Link>
        <button onClick={handleSave}>Save</button>
      </div>
      <Link to="/admin">Back to Home</Link>

      <SideNavRight title={data.title} body={data.body} />
    </div>
  );
}
