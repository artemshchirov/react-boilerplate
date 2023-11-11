import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from "@web/components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { NameInput, UsernameInput } from "./pricing-dialog-inputs";

function PricingDialog({ children }: { children: React.ReactNode }) {
  const handleSubmit = () => {
    console.log("PricingDialog clicked");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <NameInput />
          <UsernameInput />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Confirm Payment
            </Button>
          </DialogClose>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PricingDialog;
