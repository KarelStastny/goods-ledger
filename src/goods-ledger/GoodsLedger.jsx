//@@viewOn:imports
import GoodsProvider from "./Provider";
import Table from "../components/table/Table";
import Modal from "../components/simply-components/Modal";
import CreateForm from "./CreateForm";

import { renderers } from "../components/tools/renderers";
import { lsi } from "./lsi";
import Alert from "../components/simply-components/Alert";
import EditForm from "./EditForm";
//@@viewOff:imports

//@@viewOn:constants

const TYPES = {
  "3d": "#007bff",
  stavebnice: "#c69500",
  figurky: "#6f42c1",
};

const columnsDefinition = [
  { header: "Date", key: "buyDate" },
  { header: "Name", key: "name" },
  {
    header: "Typ",
    key: "type",
    cell: (row) => (
      <span
        style={{
          padding: "4px 8px",
          borderRadius: "12px",
          color: "#fff",
          backgroundColor: TYPES[row?.type],
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {lsi.columns?.[row?.type]}
      </span>
    ),
  },
  { header: "Quantity", key: "quantity" },
  {
    header: "Nákupní cena",
    key: "buyPrice",
    cell: (row) => `${row.buyPrice} Kč`,
  },
  { header: "description", key: "description" },
  {
    header: "Zahájení prodeje",
    key: "saleStart",
    cell: (row) => (
      <span
        style={{
          padding: "4px 8px",
          borderRadius: "12px",
          color: "#fff",
          backgroundColor: row?.saleStart === "true" ? "#28a745" : "#dc3545",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {row?.saleStart === "true" ? "Aktivní" : "Neaktivní"}
      </span>
    ),
  },
  {
    header: "Zboží Dorazilo",
    key: "goodsArrived",
    cell: (row) =>
      row?.goodsArrived ? (
        <span
          style={{
            padding: "4px 8px",
            borderRadius: "12px",
            color: "#fff",
            backgroundColor:
              row?.goodsArrived === "true" ? "#28a745" : "#dc3545",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {row?.goodsArrived === "true" ? "Ano" : "Ne"}
        </span>
      ) : null,
  },
];
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

function GoodsLedger() {
  //@@viewOn:render
  return (
    <div>
      <GoodsProvider>
        {({
          data,
          reload,
          modals,
          onClose,
          handleCreateItem,
          alert,
          handleEditItem,
          dataItem,
        }) => {
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
