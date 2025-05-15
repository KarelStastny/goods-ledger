//@@viewOn:imports

import GoodsProvider from "./Provider";
import Table from "../components/table/Table";
import Modal from "../components/simply-components/Modal";
import CreateForm from "./CreateForm";
import { renderers } from "../components/tools/renderers";
import Alert from "../components/simply-components/Alert";
//@@viewOff:imports

//@@viewOn:constants
const columnsDefinition = [
  { Header: "Date", key: "buyDate" },
  { Header: "ID", key: "id", cell: (row) => renderers.tooltip(row.id, 3) },
  { Header: "Name", key: "name" },
  { Header: "Quantity", key: "quantity" },
  {
    Header: "Nákupní cena",
    key: "buyPrice",
    cell: (row) => `${row.buyPrice} Kč`,
  },
  { Header: "description", key: "description" },
  { Header: "Zahájení prodeje", key: "saleStartDate" },
];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function GoodsLedger() {
  //@@viewOn:render
  return (
    <div>
      <GoodsProvider>
        {({ data, reload, modals, onClose, handleCreateItem, alert }) => {
    
          return (
            <div>
              <Table
                data={data}
                columnsDefinition={columnsDefinition}
                layout="default"
                header="Seznam všech položek"
                blockActions={[
                  {
                    label: "Vytvořit novou položku",
                    onClick: () => modals.setCreateModal({ open: true }),
                  },
                ]}
              />
              {/* Create Modal */}
              <Modal
                open={modals.createModal?.open}
                onClose={() => onClose()}
                header="Vytvořit novou položku"
                content={
                  <CreateForm
                    reload={reload}
                    onClose={() => onClose()}
                    handleSubmitCreateButton={handleCreateItem}
                  />
                }
                showCloseButton={true}
                showSubmitButton={false}
              />

              {/* Edit Modal */}
              <Modal
              open={modals.editModal?.open} onClose={() => onClose()} header={"Editovat položku (přidat jení název)"}/>

              <Alert alert={alert} />
            </div>
          );
        }}
      </GoodsProvider>
    </div>
  );
  //@@viewOff:render
}

export default GoodsLedger;
