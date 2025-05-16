//@@viewOn:imports

import GoodsProvider from "./Provider";
import Table from "../components/table/Table";
import Modal from "../components/simply-components/Modal";
import CreateForm from "./CreateForm";
import { renderers } from "../components/tools/renderers";
import Alert from "../components/simply-components/Alert";
import EditForm from "./EditForm";
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
        {({ data, reload, modals, onClose, handleCreateItem, alert, handleEditItem, dataItem, }) => {
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
                    onSubmit={handleCreateItem}
                  />
                }
                showCloseButton={true}
                showSubmitButton={false}
              />

              {/* Edit Modal */}
              <Modal
                open={modals.editModal?.open}
                onClose={() => onClose()}
                header={dataItem?.name || "Editovat Položku"}
                content={
                  <EditForm
                    reload={reload}
                    dataItem={dataItem}
                    onClose={() => onClose()}
                    onSubmit={handleEditItem}
                  />
                }
                showSubmitButton={false}
              />

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
