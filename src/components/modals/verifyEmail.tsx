import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Separator } from '../ui/separator';
import MailingLetters from '@/assets/MailingLetters.png';
import { Button } from '../ui/button';

const VerifyEmailModal = NiceModal.create(() => {
  const modal = useModal();

  return (
    <Dialog
      open={modal.visible}
      onOpenChange={() => {
        modal.hide();
      }}
    >
      <DialogContent className='p-0 gap-0 max-w-[400px] w-full'>
        <h1 className='heading-3 text-center py-3 font-semibold'>
          Welcome to JIIBS.
        </h1>
        <Separator />
        <div className='py-[30px] px-10 flex flex-col text-center justify-center'>
          <img src={MailingLetters} alt='Bunch of mails' className='mb-4' />
          <h2 className='heading-3 mb-6'>Please verify your email</h2>
          <p className='mb-5 paragraph-1'>
            We sent an email to: <br /> <span>YOUR EMAIL</span>
          </p>
          <p className='mb-[30px] paragraph-1 text-[#565656]'>
            To verify, Please check your inbox and follow the links. For your
            safety, we may also need to verify your phone number
          </p>
          <Button variant='secondary' className='mb-3'>
            Change email
          </Button>
          <Button variant='secondaryOutline'>Resend Verification Email</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
});

export default VerifyEmailModal;
