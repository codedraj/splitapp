import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EditTask from "../EditTask/EditTask";

export default function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditTask
          // title={props.task.title}
          // status={props.task.status}
          // userName={props.task.userName}
          // _id={props.task._id}
          // description={props.task.description}
          task={props.task}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
