// // import { Editor } from "@tinymce/tinymce-react";
// import Editor from '@react-page/editor';
// import axios from "axios";
// import { useRef, useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { WordContext } from "../context";
// // The rich text area plugin
// import slate from '@react-page/plugins-slate';
// // image
// import image from '@react-page/plugins-image';

// // Define which plugins we want to use.
// const cellPlugins = [slate(), image];

// export default function Pages() {
//   const { currentAdmin, setCurrentAdmin, post, setPost } =
//     useContext(WordContext);

//   const [data, setData] = useState({
//     owner: currentAdmin._id,
//     body: "",
//     title: "",
//     subtitle: "",
//     published: false,
//   });

//   const editorRef = useRef(null);

//   const handleSave = async () => {
//     if (editorRef.current.getContent()) {
//       console.log(
//         "editorRef.current.getContent is:",
//         editorRef.current.getContent()
//       );

//       console.log("data is", data);

//       const response = await axios.post("/posts/add", data);

//       console.log("response is from add post", response);
//     }
//   };

//   const handleEditorChange = () => {
//     setData({ ...data, body: editorRef.current.getContent() });
//     console.log("post is", data);
//   };
//   console.log("edit ref", editorRef);

//   return (
//     <div className="container">
//       <input
//         placeholder="Type the title"
//         value={data.title}
//         onChange={(e) => setData({ ...data, title: e.target.value })}
//       />
//       <input
//         placeholder="Type the subtitle"
//         value={data.subtitle}
//         onChange={(e) => setData({ ...data, subtitle: e.target.value })}
//       />

//       <Editor
//       cellPlugins={cellPlugins}
//         onInit={(evt, editor) => (editorRef.current = editor)}
//         initialValue=""
//         init={{
//           height: 500,
//           menubar: false,
//           plugins: [
//             "advlist autolink lists link image charmap print preview anchor",
//             "searchreplace visualblocks code fullscreen",
//             "insertdatetime media table paste code help wordcount",
//           ],
//           toolbar:
//             "undo | redo | formatselect | " +
//             "bold italic backcolor | alignleft aligncenter " +
//             "alignright alignjustify | bullist numlist outdent indent | " +
//             "removeformat | help",
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//         onEditorChange={handleEditorChange}
//       />

//       <Link to="/admin">Back to Home</Link>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// }
