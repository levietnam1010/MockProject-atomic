import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func
};


Pagination.defaultProps = {
    onPageChange: null,
}

function Pagination(props) {

    const { pagination, onPageChange } = props
    const { page, limit, totalRow } = pagination
    const totalPage = Math.ceil(totalRow / limit)


    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            <i className="fas fa-angle-left" disable={page <= 1} onClick={() => handlePageChange(page - 1)}></i> {page}/{totalPage}   <i className="fas fa-angle-right" disable={page >= totalPage} onClick={() => handlePageChange(page + 1)}></i>
        </div>
    );
}

export default Pagination;