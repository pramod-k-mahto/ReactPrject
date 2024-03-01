import './ToDoList.css';
import { useEffect, useState } from 'react';

function ToDOList() {
    const [Activity, setActivity] = useState('');
    const [ActivityList, setActivityList] = useState([]);
    const itemsPerPage = 5; // Number of items to display per page

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [totalPage, setTotalPage] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = ActivityList.slice(startIndex, endIndex);
        setItemsToShow(items);

        // Calculate total pages inside useEffect
        const totalPages = Math.ceil(ActivityList.length / itemsPerPage);
        setTotalPage(totalPages);
    }, [ActivityList, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const addToDo = () => {
        if (Activity.length > 0) {
            setActivityList((prevList) => [Activity, ...prevList]);
            setActivity('');
        } else {
            alert('FillUp');
        }
    };

    const deleteList = (i) => {
        const filterList = ActivityList.filter((item, index) => i !== index);
        setActivityList(filterList);
    };

    const removeAll = () => {
        setActivityList([]);
    };

    return (
        <>
            <h2>My ToDoList</h2>
            <div className="DoTo-body">
                <input
                    placeholder="Enter Activity"
                    value={Activity}
                    type="text"
                    onChange={(e) => setActivity(e.target.value)}
                    required
                />
                <button className="ToDo-btn" onClick={addToDo}>
                    Add List
                </button>

                {itemsToShow.length > 0 &&
                    itemsToShow.map((list, i) => (
                        <div key={i}>
                            <p>{list}</p>
                            <button onClick={() => deleteList(i)}>Delete</button>
                        </div>
                    ))}

                {itemsToShow.length > 1 && <button onClick={removeAll}>Remove ALL</button>}
                <br />

                {totalPage > 0 && (
                    <div>
                        <button className="pagination-btn" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Prev
                        </button>
                        <span>{currentPage} of {totalPage}</span>
                        <button className="pagination-btn" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPage}>
                            Next
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default ToDOList;
