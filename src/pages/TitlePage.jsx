import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TitleDetails from '../components/TitleDetails';
import ActorList from '../components/ActorList';
import ActorDetails from '../components/ActorDetails';
import Loader from '../components/Loader';
import { getTitle, getActors, getActor } from "../Requests";

function TitlePage() {
  const { type, id } = useParams();
  const [title, setTitle] = useState({});
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedActorID, setSelectedActorID] = useState(null);
  const [selectedActor, setSelectedActor] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const titleData = await getTitle(type, id);
      setTitle(titleData);

      const actorsData = await getActors(type, id);
      setActors(actorsData);

      setLoading(false);
    };

    fetchData();
  }, [type, id]);

  useEffect(() => {
    const fetchActor = async () => {
      if (selectedActorID) {
        setLoading(true);
        const actorData = await getActor(selectedActorID);
        setSelectedActor(actorData);
        setLoading(false);
      }
    };

    fetchActor();
  }, [selectedActorID]);

  console.log(title)

  return (
    <div className="relative">
      {selectedActorID && (
        <ActorDetails
          actor={selectedActor}
          loading={loading}
          onClose={() => setSelectedActorID(null)}
        />
      )}
      <div className="pt-20 pb-6"> {/* Add padding to the top and bottom to prevent overlap with Navbar */}
        {title && <TitleDetails title={title} />}
        {actors.length > 0 && (
          <ActorList
            header="Cast"
            actors={actors}
            onClick={setSelectedActorID}
          />
        )}
        {loading && <Loader />}
      </div>
    </div>
  );
}

export default TitlePage;
