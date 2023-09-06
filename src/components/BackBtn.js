import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export function BackBtn() {
    const navigate = useNavigate();
    return (
        <div className="back-btn">
            <Button onClick={() => navigate(-1)} variant="outlined" color='error'><ArrowBackIosIcon /> BACK</Button>
        </div>
    );
}
