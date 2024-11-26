import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/home/Home";
import { Projects } from "./pages/projects/Projects";
import { Notes } from "./pages/notes/Notes";
import { Contact } from "./pages/contact/Contact";
import { About } from "./pages/about/About";
import dataProject from "../src/data/dataProjects";
import dataNote from "./data/dataNotes";
import { DetailProject } from "./pages/detailproject/DetailProject";
import { DetailNote } from "./pages/detailnote/detailnote";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects projects={dataProject} />} />
        <Route path="/notes" element={<Notes notes={dataNote} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/project/:name"
          element={<DetailProject projects={dataProject} />}
        />
        <Route path="/note/:name" element={<DetailNote notes={dataNote} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
