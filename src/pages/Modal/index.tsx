import Modal from "components/Modal";
import { PageHeader } from "components/PageHeader";
import { PDFViewer } from "components/PDFViewer";
import React, { useState } from "react";

import lorem from "assets/lorem.pdf";

export const ModalPage = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleOpenModalClick = () => setModalOpened((prevState) => !prevState);

  return (
    <section>
      <PageHeader>PDF loaded in a modal component</PageHeader>
      <div className="flex justify-center">
        <button
          className="mt-4 bg-zinc-900 px-4 py-2 rounded-sm shadow-lg hover:bg-zinc-800"
          onClick={handleOpenModalClick}
        >
          Click to open modal
        </button>
      </div>
      {modalOpened && (
        <Modal title="PDFViewer on Modal" onClose={() => setModalOpened(false)}>
          <PDFViewer file={lorem} />
        </Modal>
      )}
    </section>
  );
};
