import Form from "../components/simply-components/Form";
import { formItemList } from "./constants";



const EditForm = ({ onSubmit, dataItem }) => {
  return (
    <div>
      <Form fields={formItemList} onSubmit={onSubmit} initialValues={dataItem} />
    </div>
  );
};

export default EditForm;
