import React from "react";
import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import api from "../../lib/axios.js"; //../..//node_modules//axios//lib//axios.js
import toast from "react-hot-toast";
import NoteCard from "../../components/NoteCard";
import NotesNotFound from "../../components/NotesNotFound";
import { useState } from "react";
//import axios from "axios";

const NotePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        //const res = await api.get("/notes");
        // console.log("Befutott 1");
        //fetch esetén:
        //const res = await fetch("http://localhost:5001/api/notes");
        //const data = await res.json();
        //axios esetén:
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        //  console.log("Befutott 2");
        //setNotes(res.data);
        //setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          //setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen" data-theme="forest">
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            Várj 50 másodpercet a betöltésre...
          </div>
        )}

        {notes.length === 0 && <NotesNotFound />}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotePage;
