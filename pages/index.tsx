import Form from "components/Form";
import List from "components/List";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styles from "styles/Home.module.css";
import { Sub } from "types/types";
import { getAllSubs } from 'services/getAllSubs'

// se sustituye por el fetch a la API.
// const INITIAL_STATE = [
//   {
//     nick: "dapelu",
//     subMonths: 3,
//     avatar: "https://i.pravatar.cc/150?u=dapelu",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, atque illo. Dolor illo voluptates quae voluptatem sunt, dolorum quos itaque tempora neque est iusto quaerat vitae natus ipsum atque at?",
//   },
//   {
//     nick: "Sergio Serrano",
//     subMonths: 7,
//     avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
//   },
// ];

//Existen 2 tipos de interfaces: De lógica de negocio(todo lo que trate mi aplicación) y las de Estado: que son los de mi componentes.
//contratos los estados, apliación, el cual determina que parametros va a recibir un estado: string, number, any, boolean, etc.

interface AppState {
  subs: Array<Sub>;
  newSubNumber: number;
}

const Home: NextPage = () => {
  const [newSubNumber, setNewSubNumber] = useState<AppState["newSubNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);
  

  // Todo esto puede ir en un custom hook *clean arquitecture
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    // fetchAPI().then((apiSubs) => {
    //   const subs = mapFromApiToSubs(apiSubs);
    //   setSubs(subs);
    // }); refactorización de este código v

    // fetchAPI().then(mapFromApiToSubs).then(setSubs);
    getAllSubs().then(setSubs)
  }, []);
  // ********************************************************

  function handleNewSub(newSub: Sub): void {
    setSubs((subs) => [...subs, newSub]);
    setNewSubNumber((n) => n + 1);
  };

  return (
    <div className={styles.container} ref={divRef}>
      <h1>fall subs</h1>
      <List subs={subs} />
      New subs: {newSubNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
};

export default Home;
