/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import xIcon from "../../assets/icons/Solid/Interface/Cross.svg";
import Button from "../../components/button";
const ModalStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  .header,
  .body {
    border-bottom: 1px solid #e6e6e6;
  }
  .modal {
    position: relative;
  }
  #x-icon {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;
const Modal = ({
  title,
  header,
  footer,
  show,
  block,
  onOk,
  onCancel,
  onHide,
  children,
}) => {
  const handelOk = () => {
    if (onOk) onOk();
  };
  const handelCancel = () => {
    if (onCancel) onCancel();
  };

  const handelHide = () => {
    if (onHide) onHide();
  };
  const refModal = useRef();
  const handleClick = (e) => {
    if (e.target.id === "modal-container") {
      console.log(e.target.classList);
      if (block) {
        refModal.current.classList.remove("slide-up-large");
        refModal.current.classList.add("shake");
        setTimeout(() => {
          refModal.current.classList.remove("shake");
        }, 500);
      } else {
        handelHide();
      }
    } else if (e.target.id === "x-icon") {
      handelHide();
    }
  };
  return (
    show && (
      <ModalStyled onClick={handleClick} id="modal-container">
        <div ref={refModal} className="card shadow-md modal slide-up-large ">
          {header || (
            <div className=" header text-center p-2">
              {title || "modal title"}
              <img
                id="x-icon"
                src={xIcon}
                alt="close modal"
                onClick={handleClick}
              />
            </div>
          )}
          <div className=" body p-2">{children || "modal body"}</div>
          {footer || (
            <div className=" p-2 footer  flex justify-center gap-2 w-10">
              <Button color="orange" className=" w-2" onClick={handelCancel}>
                cancel
              </Button>
              <Button color="green" className=" w-2" onClick={handelOk}>
                confirm
              </Button>
            </div>
          )}
        </div>
      </ModalStyled>
    )
  );
};

export default Modal;
