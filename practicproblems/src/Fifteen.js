//Pagination component to Navigate through a large list of items
import React, { useState } from 'react'

export default function Fifteen({ items, itemsPerPage }) {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

    console.log(indexOfLastItem);
    console.log(indexOfFirstItem);
    console.log(currentItems);

    return (
        <div>

        </div>
    )
}
