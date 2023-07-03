import Form from "components/Form";
import List from "components/List";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styles from "styles/Home.module.css";
import { Sub } from "types/types";
import { getAllSubs } from "services/getAllSubs";
import Link from "next/link";
import useTimer from "hooks/useTimer";
import { format } from "date-fns";

// let uuid = new DeviceUUID().get();
// console.log(uuid)

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
  const { timeout, remaining, elapsed, lastActive, isIdle, popUp } = useTimer();
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
    getAllSubs().then(setSubs);
  }, []);
  // ********************************************************

  function handleNewSub(newSub: Sub): void {
    setSubs((subs) => [...subs, newSub]);
    setNewSubNumber((n) => n + 1);
  }



  // let du = new DeviceUUID().parse();
  // let dua = [
  //     du.language,
  //     du.platform,
  //     du.os,
  //     du.cpuCores,
  //     du.isAuthoritative,
  //     du.silkAccelerated,
  //     du.isKindleFire,
  //     du.isDesktop,
  //     du.isMobile,
  //     du.isTablet,
  //     du.isWindows,
  //     du.isLinux,
  //     du.isLinux64,
  //     du.isMac,
  //     du.isiPad,
  //     du.isiPhone,
  //     du.isiPod,
  //     du.isSmartTV,
  //     du.pixelDepth,
  //     du.isTouchScreen
  // ];
  // let uuid = du.hashMD5(dua.join(':'));

  return (
    <div className={styles.container} ref={divRef}>
      <h1>{popUp ? "Se ha detectado inactividad en tu cuenta" : null}</h1>
      <h1>Timeout: {timeout}ms</h1>
      <h1>Time Remaining: {remaining}</h1>
      <h1>Time Elapsed: {elapsed}</h1>
      <h1>
        Last Active:{" "}
        {lastActive ? format(lastActive, "MM-dd-yyyy HH:MM:ss.SSS") : null}
      </h1>
      <h1>Idle: {isIdle.toString()}</h1>
      <h1>fall subs</h1>
      <List subs={subs} />
      New subs: {newSubNumber}
      <Form onNewSub={handleNewSub} />
      <Link href="/about">
        About
      </Link>
    </div>
  );
};

export default Home;
