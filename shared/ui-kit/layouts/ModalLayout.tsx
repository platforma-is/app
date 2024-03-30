import {
  CloseButton,
  Modal,
  ModalBodyProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalRootProps,
} from "@mantine/core";
import React from "react";

type ModalLayoutProps = {
  header?: React.ReactNode;
  body?: React.ReactNode;
  ModalRootProps: ModalRootProps;
  ModalContentProps?: ModalContentProps;
  ModalHeaderProps?: ModalHeaderProps;
  ModalBodyProps?: ModalBodyProps;
};
export const ModalLayout = ({
  header,
  body,
  ModalRootProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
}: ModalLayoutProps) => {
  return (
    <Modal.Root {...ModalRootProps}>
      <Modal.Overlay />
      <Modal.Content {...ModalContentProps}>
        <Modal.Header {...ModalHeaderProps}>
          {header}
          <CloseButton onClick={ModalRootProps.onClose} />
        </Modal.Header>
        <Modal.Body {...ModalBodyProps}>{body}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
