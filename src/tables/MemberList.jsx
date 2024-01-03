import React, { useEffect, useState } from 'react';
import { fetchMembers } from '../api/member';

const MemberList = () => {
    const [memberlist, setMemberlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 7;

    useEffect(() => {
        async function fetchMemberData() {
            const members = await fetchMembers();
            setMemberlist(members);
        }
        fetchMemberData();
    }, []);

    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = memberlist.slice(indexOfFirstMember, indexOfLastMember);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <div className="relative overflow-x-auto h-[412px]  w-3/4 mx-auto mt-10 border-b border-l rounded-t-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs rounded-t-lg uppercase bg-white bg-opacity-80 text-black backdrop-filter backdrop-blur-lg  dark:text-gray-400">
                        <tr className='border-b border-white'>
                            <th scope="col" className="px-6 py-3 rounded-ss-lg">
                                Member ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Member Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-es-lg">
                                Package
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {currentMembers.map((member) => (
                            <tr key={member.memberId} className="bg-white bg-opacity-10 text-white backdrop-filter backdrop-blur-sm border-white border-t border-b" >
                                <th scope="row" className="px-6 py-4 font-bold whitespace-nowrap dark:text-white">
                                    {member.memberId}
                                </th>
                                <td className="px-6 font-semibold py-4">
                                    {member.name}
                                </td>
                                <td className="px-6 font-semibold py-4">
                                    {member.gender}
                                </td>
                                <td className="px-6 font-semibold py-4">
                                    {member.requirement}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


            </div>
            <div className="flex justify-between w-3/4 mx-auto">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter px-3 backdrop-blur-sm border-white text-lg border rounded-b-md"
                >
                    Prev
                </button>
                <button
                    onClick={nextPage}
                    disabled={indexOfLastMember >= memberlist.length}
                    className="bg-white bg-opacity-10 hover:bg-opacity-50 hover:text-black text-white backdrop-filter px-3 backdrop-blur-sm border-white text-lg border rounded-b-md"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default MemberList;
