import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Form,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  DatePicker,
} from "@heroui/react";
import { useState } from "react";
import TagInput from "./TagInput";

interface TicketModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ticketPriorities = [
  { key: "lowPriority", label: "Low Priority" },
  { key: "mediumPriority", label: "Medium Priority" },
  { key: "highPriority", label: "High Priority" },
];

export const progress = [
  { key: "toDoProgress", label: "To Do" },
  { key: "inProgress", label: "In Progress" },
  { key: "completedProgress", label: "Completed" },
];
export default function TicketModal({
  isOpen,
  onOpenChange,
}: TicketModalProps) {
  const [showTimeFrame, setShowTimeFrame] = useState<boolean>(false);
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="font-sans">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create A Ticket
            </ModalHeader>
            <ModalBody>
              <Form>
                <Input
                  isRequired
                  errorMessage="Please enter a Title"
                  label="Ticket title"
                  labelPlacement="inside"
                  name="ticket"
                  placeholder="Enter a title for this ticket."
                  type="text"
                />
                <Textarea
                  label="Description"
                  labelPlacement="inside"
                  placeholder="Enter your description for this ticket."
                />
                <Select label="Select ticket priority">
                  {ticketPriorities.map((priority) => (
                    <SelectItem key={priority.key}>{priority.label}</SelectItem>
                  ))}
                </Select>
                <Select label="Select Progress" isRequired>
                  {progress.map((p) => (
                    <SelectItem key={p.key}>{p.label}</SelectItem>
                  ))}
                </Select>
                <Checkbox
                  isSelected={showTimeFrame}
                  onValueChange={setShowTimeFrame}
                >
                  Add time frame
                </Checkbox>
                <DatePicker
                  isDisabled={!showTimeFrame}
                  isReadOnly
                  label="From"
                  id="fromDate"
                />
                <DatePicker
                  isDisabled={!showTimeFrame}
                  isReadOnly
                  label="To"
                  id="fromDate"
                />
                <TagInput
                  label="Ticket Tags"
                  placeholder="Enter tags and press Enter"
                />
                <Select label="Reporter" isRequired>
                  <SelectItem>Self</SelectItem>
                  <SelectItem>Bob Gerald</SelectItem>
                  <SelectItem>Sam Friedman</SelectItem>
                </Select>
                <Select label="Assignee" isRequired>
                  <SelectItem>Self</SelectItem>
                  <SelectItem>Bob Gerald</SelectItem>
                  <SelectItem>Sam Friedman</SelectItem>
                </Select>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button className="bg-black text-white" onPress={onClose}>
                Create a Ticket
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
