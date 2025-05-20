//@@viewOn:imports
import Form from "../components/simply-components/Form";
import { formItemList } from "./constants";
//@@viewOff:imports

//@@viewOn:constants


//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function CreateForm({ onSubmit }) {
  //@@viewOn:render
  return (
    <div>
      <Form fields={formItemList} onSubmit={onSubmit} />
    </div>
  );
  //@@viewOff:render
}

export default CreateForm;
