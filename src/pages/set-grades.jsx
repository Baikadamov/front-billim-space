import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AuthService from '../service/authservice';

const SetGrades = () => {
   const { id } = useParams();
   const [course, setCourse] = useState(null);
   const [currentUser, setCurrentUser] = useState(undefined);
   const [assignmentIds, setAssignmentIds] = useState([]);
   const [assignments, setAssignments] = useState([]);
   const [grade, setGrade] = useState({});

   const [isEditMode, setIsEditMode] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         try {
            await axios.get(`http://localhost:5000/api/course/${id}`).then((response) => {
               setCourse(response.data);

               const assignmentIds = response.data.assignments.map((assignment) => assignment._id);
               setAssignmentIds(assignmentIds);
            });
         } catch (error) {
            console.error('Error fetching course:', error);
         }
      };

      const user = AuthService.getCurrentUser();
      console.log(user);
      if (user) {
         setCurrentUser(user);
         console.log('User email:', user.user.email);
         console.log('User role:', user.user.role);
      }

      fetchData();
   }, []);

   useEffect(() => {
      const fetchAssignment = async () => {
         try {
            await axios
               .post('http://localhost:5000/api/assignment-many', {
                  ids: assignmentIds,
               })
               .then((response) => {
                  setAssignments(response.data);
                  console.log(assignmentIds);
                  console.log(response.data);
               });
         } catch (error) {
            console.error('Error fetching assignments:', error);
         }
      };
      fetchAssignment();
   }, [assignmentIds]);

   const handleSetGrade = (studentId, assignmentId, value) => {
      setGrade((prevGrades) => ({
         ...prevGrades,
         [`${studentId}-${assignmentId}`]: value,
      }));
   };

   const saveGrades = async () => {
      try {
         const gradesToUpdate = [];

         Object.keys(grade).forEach((key) => {
            const [studentId, assignmentId] = key.split('-');

            const value = grade[key] * 1;

            console.log(typeof value);

            gradesToUpdate.push({
               studentId,
               assignmentId,
               grade: value,
            });
         });
         console.log(gradesToUpdate);
         await axios.put('http://localhost:5000/api/assignment/update-grades', {
            gradesToUpdate: gradesToUpdate,
         });

         console.log('Оценки успешно сохранены на сервере');
      } catch (error) {
         console.error('Ошибка при сохранении оценок:', error);
      }
   };

   return (
      <>
         {course ? (
            <div className="p-4 sm:ml-64 mt-5">
               <div>
                  <span className=" text-lg">
                     {' '}
                     Название курса : <span className="font-medium text-xl">
                        {' '}
                        {course.title}
                     </span>{' '}
                  </span>
                  <hr className="my-5" />
               </div>
               <div className="container course justify-between px-5">
                  <div className=" text-blue-800 font-medium mb-5 ">
                     <div className="py-2">
                        <a href={`/course/${course._id}`} className="link hover:underline">
                           Задания
                        </a>
                     </div>
                     {currentUser && currentUser.user.role === 'TEACHER' && (
                        <div className="py-2">
                           <a href={'/create-task'} className="link hover:underline">
                              Добавить новое задание
                           </a>
                        </div>
                     )}
                     <div className="py-2">
                        <a href={`/course/${course._id}/grades`} className="link hover:underline">
                           {' '}
                           Оценки
                        </a>
                     </div>
                     <div className="py-2">
                        <a href={`/all-users`} className="link hover:underline">
                           {' '}
                           Пользователи
                        </a>
                     </div>
                  </div>

                  <div className=" w-5/6 mb-5">
                     <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                 <th scope="col" class="px-6 py-3">
                                    Имя студента
                                 </th>
                                 {assignments.map((item, index) => {
                                    return (
                                       <th scope="col" class="px-6 py-3">
                                          {item.title}
                                       </th>
                                    );
                                 })}
                                 <th scope="col" class="px-6 py-3">
                                    Общая оценка
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {course.studentsData.map((student, index) => {
                                 return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                       <th
                                          scope="row"
                                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          {student.firstname} {student.lastname}
                                       </th>
                                       {assignments.map((assignment, assignmentIndex) => {
                                          const fileForStudent = assignment.files.find(
                                             (file) => file.studentId === student.student,
                                          );

                                          const gradeForStudent = assignment.grades.find(
                                             (grade) =>
                                                grade.student.toString() ===
                                                student.student.toString(),
                                          );
                                          const gradeToShow = gradeForStudent
                                             ? gradeForStudent.grade
                                             : 0;

                                          return (
                                             <td className="px-6 py-4" key={assignmentIndex}>
                                                <a
                                                   href={
                                                      fileForStudent ? fileForStudent.filename : '#'
                                                   }
                                                   className="hover:underline">
                                                   {fileForStudent
                                                      ? fileForStudent.filename.substring(0, 12) +
                                                        '...'
                                                      : 'No File'}
                                                </a>
                                                <span className="mx-2 text-black">
                                                   Оценка :
                                                   {isEditMode ? (
                                                      <input
                                                         type="number"
                                                         value={
                                                            grade[
                                                               `${student.student}-${assignment._id}`
                                                            ] || ''
                                                         }
                                                         onChange={(e) =>
                                                            handleSetGrade(
                                                               student.student,
                                                               assignment._id,
                                                               e.target.value,
                                                            )
                                                         }
                                                         className="w-20 border-0 text-black"
                                                         placeholder={gradeToShow}
                                                      />
                                                   ) : (
                                                      <span className="mx-2 text-black">
                                                         {gradeToShow}
                                                      </span>
                                                   )}
                                                </span>
                                             </td>
                                          );
                                       })}
                                       <th
                                          scope="row"
                                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          <span className="mx-2 text-black">
                                             <input
                                                type="number"
                                                className="w-20 border-0 text-black "
                                                placeholder="90"
                                             />
                                          </span>
                                       </th>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                        <br />
                        <button
                           onClick={() => {
                              if (isEditMode) {
                                 saveGrades();
                              }
                              setIsEditMode(!isEditMode);
                           }}>
                           {isEditMode ? 'Сохранить оценки' : 'Редактировать'}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <p>Loading...</p>
         )}
      </>
   );
};

export default SetGrades;
