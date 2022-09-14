import React, { ReactElement, ReactNode } from "react";

interface ModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ title, children, onClose }: ModalProps): ReactElement => {
  return (
    <section className="absolute top-0 left-0 w-full h-screen p-16 bg-opacity-60 bg-black">
      <div className="flex flex-col justify-center w-full">
        <div className="bg-zinc-900 w-full h-16 flex justify-between items-center px-8">
          <h1 className="text-lg font-bold">{title}</h1>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="w-full bg-white text-zinc-900 h-96 overflow-auto px-4 py-2">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
