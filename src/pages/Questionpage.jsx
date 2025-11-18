function QuestionPage() {
  return (
    <>
      <div
        className="
    w-[100%]
    h-[100vh]
    bg-[red]
    flex
    justify-center
    items-center
  "
      >
        <div
          className="
      w-[90%]
      h-[90%]
      bg-white shadow-soft rounded-xl
      flex
      flex-col
      p-[10px_15px]
    "
        >
          <div className="mt-[80px] flex justify-center text-[20px] font-[700] font-sans lg:text-[40px]">
            EduNexa Quiz
          </div>

          <div className="flex justify-center text-[18px] font-[600] font-sans lg:text-[30px]">
            QUESTION: 1/20
          </div>

          <div className="text-[15px] font-[500] lg:text-[23px]">
            Who is a boy
          </div>

          <div className="flex justify-center text-[15px] font-[500] lg:text-[23px]">
            OPTIONS:
          </div>

          <div className="flex flex-col">
            <div className="bg-[green] p-[2px_10px] w-[90%] mb-[10px] rounded-[3px] text-[15px] font-[500] lg:text-[23px] lg:p-[12px_15px] lg:rounded-[7px]">
              John
            </div>
            <div className="bg-[green] p-[2px_10px] w-[90%] mb-[10px] rounded-[3px] text-[15px] font-[500] lg:text-[23px] lg:p-[12px_15px] lg:rounded-[7px]">
              David
            </div>
            <div className="bg-[green] p-[2px_10px] w-[90%] mb-[10px] rounded-[3px] text-[15px] font-[500] lg:text-[23px] lg:p-[12px_15px] lg:rounded-[7px]">
              Matthew
            </div>
            <div className="bg-[green] p-[2px_10px] w-[90%] mb-[10px] rounded-[3px] text-[15px] font-[500] lg:text-[23px] lg:p-[12px_15px] lg:rounded-[7px]">
              Moses
            </div>
          </div>

          <div className="flex justify-end items-center mt-[10px]">
            <div className="mr-[15px] bg-[pink] rounded-[3px] p-[5px_7px] text-[15px] font-[500] lg:text-[23px] lg:p-[10px_10px]">
              Previous
            </div>
            <div className="mr-[10px] bg-[pink] rounded-[3px] p-[5px_12px] text-[15px] font-[500] lg:text-[23px] lg:p-[10px_14px]">
              Next
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionPage;
