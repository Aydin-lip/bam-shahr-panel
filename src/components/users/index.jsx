import { MagnifyingGlassIcon, PencilSquareIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import { TextField, styled } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import PaginationComponent from "../tabel/pagination";
import ModalComponent from "../modal";


let allItems = [
  { firstName: 'علی', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '3756242', id: '6368278366' },
  { firstName: 'الهی وردی', lastName: 'غنی', fatherName: 'ولی زاده', dateBirth: '1302/64/62', placeBirth: 'مشهد', nationalCode: '3756242', id: '6368278366' },
  { firstName: 'علی', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '3756242', id: '6368278366' },
  { firstName: 'محمد', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '936242423', id: '6368278366' },
  { firstName: 'مهدی', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '345577564', id: '6368278366' },
  { firstName: 'عباس', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '2453246', id: '6368278366' },
  { firstName: 'مهران', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '8564534', id: '6368278366' },
  { firstName: 'امیر', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '5645342', id: '6368278366' },
  { firstName: 'زارع', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '3455645', id: '6368278366' },
  { firstName: 'امیر رضا', lastName: 'حسنی', fatherName: 'مجید', dateBirth: '1402/02/02', placeBirth: 'کرمانشاه', nationalCode: '43545297', id: '6368278366' },
]

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&': {
      color: '#fff'
    },
  },
});

const Users = () => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('نام')
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let rows = document.querySelectorAll('.row-them')
    rows.forEach((r, idx) => {
      if (idx % 2 === 0)
        r.classList.add("bg-dark-them-active")
    })
  }, [document])

  const changePageFunc = (n) => {
    setPage(n.selected)
  }

  let Items = useMemo(() => (
    search.length > 0 ?
      allItems.filter(item => {
        switch (searchType) {
          case 'نام':
            return item.firstName.includes(search)
          case 'نام خانوادگی':
            return item.lastName.includes(search)
          case 'نام پدر':
            return item.fatherName.includes(search)
          case 'تاریخ تولد':
            return item.dateBirth.includes(search)
          case 'محل تولد':
            return item.placeBirth.includes(search)
          case 'کد ملی':
            return item.nationalCode.includes(search)
          case 'شماره شناسنامه':
            return item.id.includes(search)

          default:
            break;
        }
      })
      : allItems
  ), [search])

  return (
    <>
      <div className="bg-dark-them p-4 rounded-md mb-4 flex justify-between">
        <div
          className="p-2 rounded-full bg-dark-them-active text-indigo-600 flex justify-center items-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <UserPlusIcon className="w-6 h-6" />
        </div>
        <CssTextField
          id="searchUsers"
          placeholder={`جستجو بر اساس (${searchType})`}
          variant="outlined"
          color="primary"
          size="small"
          className="bg-dark-them-active text-white rounded-lg rtl"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="bg-dark-them h-[calc(100%_-_88px)] p-4 rounded-md relative">
        <div className="h-[calc(100%_-_30px)] w-full overflow-auto">
          <table className="text-dark-them border-collapse border-spacing-4 w-full">
            <thead>
              <tr className="border-b border-stone-300 text-slate-300">
                <th className="p-2 text-end"></th>
                <th className="p-2 text-end">
                  <span className="flex flex-row-reverse justify-start items-center gap-3">
                    شماره شناسنامه
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('شماره شناسنامه')} />
                    </label>
                  </span>
                </th>
                <th className="p-2 text-end">
                  <span className="flex flex-row-reverse justify-start items-center gap-3">
                    کد ملی
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('کد ملی')} />
                    </label>
                  </span>
                </th>
                <th className="p-2 text-end">
                  <span className="flex flex-row-reverse justify-start items-center gap-3">
                    محل تولد
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('محل تولد')} />
                    </label>
                  </span>
                </th>
                <th className="p-2 text-end">
                  <span className="flex flex-row-reverse justify-start items-center gap-3">
                    تاریخ تولد
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('تاریخ تولد')} />
                    </label>
                  </span>
                </th>
                <th className="p-2 text-end">
                  <span className="flex flex-row-reverse justify-start items-center gap-3">
                    نام پدر
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('نام پدر')} />
                    </label>
                  </span>
                </th>
                <th className="p-2 text-end">
                  <span className="flex flex-row-reverse justify-start items-center gap-3">
                    نام خانوادگی
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('نام خانوادگی')} />
                    </label>
                  </span>
                </th>
                <th className="p-2 text-end">
                  <span className=" flex flex-row-reverse justify-start items-center gap-3">
                    نام
                    <label htmlFor="searchUsers">
                      <MagnifyingGlassIcon
                        className="w-5 h-5 cursor-pointer hover:text-white transition-all"
                        onClick={() => setSearchType('نام')} />
                    </label>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="font-black">

              {Items.map((item, idx) =>
                <tr className="border-t border-black row-them" key={idx}>
                  <td className="p-2 py-4 text-end">
                    <div className="flex gap-2 justify-center">
                      <span className="cursor-pointer">
                        <TrashIcon className="w-5 h-5 text-red-700" />
                      </span>
                      <span className="cursor-pointer">
                        <PencilSquareIcon className="w-5 h-5 text-indigo-500" />
                      </span>
                    </div>
                  </td>
                  <td className="p-2 py-4 text-end">{item.id}</td>
                  <td className="p-2 py-4 text-end">{item.nationalCode}</td>
                  <td className="p-2 py-4 text-end">{item.placeBirth}</td>
                  <td className="p-2 py-4 text-end">{item.dateBirth}</td>
                  <td className="p-2 py-4 text-end">{item.fatherName}</td>
                  <td className="p-2 py-4 text-end">{item.lastName}</td>
                  <td className="p-2 py-4 text-end"><span>{item.firstName}</span></td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
        <div>
          <PaginationComponent page={page} onPageChange={changePageFunc} pageCount={10} />
        </div>
      </div>
      <ModalComponent open={open} setOpen={setOpen} />
    </>
  )
}

export default Users