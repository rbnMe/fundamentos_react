import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import styles from "./App.module.css";
import Game from "./components/game/Game";

interface User {
  name: string;
  age: number;
}

function MyH1({ name, age }: User) {
  //Zona de declaraciones estados, manejadores de eventos, hooks, efectos colaterales
  return (
    <h1>
      HOLA {name} - {age}
    </h1>
  );
}

function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) return;
    console.log("Count cambiado:", count);
  }, [count]); //Las dependencias de ejecución
  const hasCount = count > 2;

  return (
    <>
      <section id="center">
        <div
          className={[styles.hero, hasCount ? styles.background : ""].join(" ")}
        >
          <img
            src={heroImg}
            className={styles.base}
            width="170"
            height="179"
            alt=""
          />
          <img src={reactLogo} className={styles.framework} alt="React logo" />
          <img src={viteLogo} className={styles.vite} alt="Vite logo" />
        </div>
        <div>
          <MyH1 age={25} name="Gabriel" />
          {MyH1({ age: 30, name: "Juan" })}
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className={styles.counter}
          onClick={() => setCount((value) => value + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

function Formulario() {
  const [name, setName] = useState("PEPE");
  const [surname, setSurname] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  return (
    <form onSubmit={(e) => console.log("submit")}>
      <fieldset>
        <legend>Formulario de usuario</legend>
        <input
          placeholder="Nombre"
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Apellido"
          name="surname"
          type="text"
          value={surname}
          onChange={handleSurnameChange}
        />
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  );
}

function Formulario2() {
  const [form, setForm] = useState<Partial<User>>({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault(); //evita que se envíe el formulario y se recargue la página
    console.log("submit", form);
    alert(JSON.stringify(form));
    // resetear el formulario
    setForm({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Formulario de usuario 2</legend>
        <input
          placeholder="Nombre"
          name="name"
          type="text"
          value={form.name || ""}
          onChange={handleFormChange}
        />
        <input
          placeholder="Edad"
          name="age"
          type="number"
          value={form.age ?? ""}
          onChange={handleFormChange}
        />
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  );
}

function ListadoUsuarios() {
  const [users, setUsers] = useState<User[]>([
    { name: "Juan", age: 25 },
    { name: "Pedro", age: 30 },
    { name: "Maria", age: 35 },
    { name: "Luis", age: 40 },
    { name: "Ana", age: 45 },
    { name: "Ana", age: 50 },
  ]);

  const handleEventClick = () => {
    setUsers((prev) => {
      return prev.map((user, index) => {
        if (index % 2 === 0) return { ...user, age: user.age + 1 };
        return user;
      });
    });
  };

  const handleUserAdded = () => {
    setUsers((prev) => [...prev, { name: "Nuevo usuario", age: 25 }]);
  };

  useEffect(() => {
    console.log("HOLA SOY lista de usuarios");
  }, []);

  useEffect(() => {
    if (users.length > 6) {
      console.log(
        "HOLA SOY lista de usuarios - Listado de usuarios actualizado",
      );
    }
  }, [users]);

  useEffect(() => {
    return () => {
      console.log("HOLA SOY lista de usuarios - DESMONTADO");
    };
  }, []);

  return (
    <>
      <h2>Lista de usuarios</h2>
      <ol>
        {users.map((user, index) => {
          return (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          );
        })}
      </ol>
      <button onClick={handleEventClick}>Actualizar usuarios</button>
      <button onClick={handleUserAdded}>Agregar usuario</button>
    </>
  );
}

function useUser() {
  const [user, setUser] = useState<User>({ name: "", age: 0 });

  const updateUser = (name: string) => {
    setUser((prev) => ({ ...prev, name }));
  };
  useEffect(() => {
    updateUser("Juan");
  }, []);
  return { user, updateUser };
}

function App() {
  //Zona de declaraciones estados, manejadores de eventos, hooks, efectos colaterales
  const [showList, setShowList] = useState(true);

  const handleEventClick = (e) => {
    console.log("Event click:", e);
    //enviar peticion al servidor
    // alert("Actualizando usuario...");
  };

  const handleDoubleClick = (e) => {
    console.log("Event double click:", e);
    //enviar peticion al servidor
  };

  useEffect(() => {
    console.log("Componente montado");
  }, []); //Las dependencias de ejecución

  return (
    <>
      <Game />
      <hr style={{ width: "100%" }} />
      <Contador />
      <button onClick={handleEventClick} onDoubleClick={handleDoubleClick}>
        Actualizar usuario
      </button>
      <Formulario />
      <Formulario2 />
      {showList ? <ListadoUsuarios /> : null}
      {showList && <ListadoUsuarios />}
      <button onClick={() => setShowList(!showList)}>
        {showList
          ? "Desmontar listado de usuarios"
          : "Montar listado de usuarios"}
      </button>
    </>
  );
}

export default App;
