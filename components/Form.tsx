import { Sub } from "types/types";
import useNewSubForm from "hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  //   const [inputValues, setInputValues] =
  //     useState<FormState["inputValues"]>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onNewSub(inputValues);
    // handleClear();
    dispatch({ type: "clear" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          name="nick"
          placeholder="nick"
          type="text"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          name="avatar"
          placeholder="avatar"
          type="text"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          name="subMonths"
          placeholder="subMonths"
          type="number"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">
          Clear the form
        </button>
        <button type="submit">Save new subs</button>
      </form>
    </div>
  );
};

export default Form;
