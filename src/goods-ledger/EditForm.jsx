import Form from "../components/simply-components/Form";
import { formCreateItems, formEditItems } from "./constants";



const EditForm = ({ onSubmit, dataItem }) => {
  return (
    <div>
      <Form fields={[...formCreateItems, ...formEditItems]} onSubmit={onSubmit} initialValues={dataItem} />
    </div>
  );
};

export default EditForm;
