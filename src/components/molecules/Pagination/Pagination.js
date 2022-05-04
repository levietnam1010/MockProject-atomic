import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};


Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {

    const { pagination, onPageChange, currentPage } = props
    const { page, limit, totalRow } = pagination
    const totalPage = Math.ceil(totalRow / limit)


    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            <ArrowBackIosIcon disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)} />
            {currentPage}/{totalPage}
            <ArrowForwardIosIcon disabled={currentPage >= totalPage} onClick={() => handlePageChange(currentPage + 1)} />

        </div>
    );
}

export default Pagination;