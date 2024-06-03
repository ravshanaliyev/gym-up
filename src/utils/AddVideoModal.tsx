import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { TextField } from '@mui/material';


const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AddVideoModal = ({ videoModal, setVideoModal }: { videoModal: boolean, setVideoModal: Function }) => {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={videoModal}
            onClose={() => setVideoModal(false)}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={videoModal}>
                <Box sx={ModalStyle}>
                    <form >
                        <TextField className='h-[0px]' id="outlined-basic" label="Outlined" variant="outlined" />
                    </form>
                </Box>
            </Fade>
        </Modal>
    )
}

export default AddVideoModal
