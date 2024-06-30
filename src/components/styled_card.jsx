import { Scale } from "@mui/icons-material";
import { Card, styled } from "@mui/material";

const StyledCard = styled(Card)({
    position: 'relative',
    '&:hover .overlay': {
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
        cursor: 'pointer',
    },
});

export default StyledCard;