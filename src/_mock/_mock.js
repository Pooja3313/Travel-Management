import { sub } from 'date-fns';
// config
import { ASSETS_API } from 'src/config-global';
//
import {
  _id,
  _ages,
  _role,
  _prices,
  _emails,
  _ratings,
  _nativeS,
  _nativeM,
  _nativeL,
  _percents,
  _booleans,
  _sentences,
  _lastNames,
  _fullNames,
  _tourNames,
  _jobTitles,
  _taskNames,
  _postTitles,
  _firstNames,
  _fullAddress,
  _companyNames,
  _productNames,
  _descriptions,
  _phoneNumbers,
  _EmpID,
  _EmpName,
  _roles,
  _department,
  _projectTitle,
  // _payment,
  _from,
  _to,
  _startDate,
  _endDate,
  _purpose,
  _accommodation,
  _transportation,
  _UploadFile,
  
 

 
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index) => _id[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => _booleans[index],
  role: (index) => _role[index],
  // Text
  taskNames: (index) => _taskNames[index],
  postTitle: (index) => _postTitles[index],
  jobTitle: (index) => _jobTitles[index],
  tourName: (index) => _tourNames[index],
  productName: (index) => _productNames[index],
  sentence: (index) => _sentences[index],
  description: (index) => _descriptions[index],
  // Contact
  email: (index) => _emails[index],
  phoneNumber: (index) => _phoneNumbers[index],
  fullAddress: (index) => _fullAddress[index],
  // Name
  firstName: (index) => _firstNames[index],
  lastName: (index) => _lastNames[index],
  fullName: (index) => _fullNames[index],
  companyName: (index) => _companyNames[index],
  // Number
  number: {
    percent: (index) => _percents[index],
    rating: (index) => _ratings[index],
    age: (index) => _ages[index],
    price: (index) => _prices[index],
    nativeS: (index) => _nativeS[index],
    nativeM: (index) => _nativeM[index],
    nativeL: (index) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index) => `${ASSETS_API}/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index) => `${ASSETS_API}/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index) => `${ASSETS_API}/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index) => `${ASSETS_API}/assets/images/company/company_${index + 1}.png`,
    product: (index) => `${ASSETS_API}/assets/images/m_product/product_${index + 1}.jpg`,
    portrait: (index) => `${ASSETS_API}/assets/images/portrait/portrait_${index + 1}.jpg`,
  },


   // New fields
   UploadFile:(index) => _UploadFile[index],
   EmpID: (index) => _EmpID[index],
   EmpName: (index) => _EmpName[index],
   roles: (index) => _roles[index],
   accommodation: (index) => _accommodation[index],
   transportation: (index) => _transportation[index],
   department: (index) => _department[index],
   projectTitle: (index) => _projectTitle[index],
  //  payment: (index) => _payment[index],
   from: (index) => _from[index],
   to: (index) => _to[index],
   startDate: (index) => _startDate[index],
   endDate: (index) => _endDate[index],
   purpose: (index) => _purpose[index],
   
  
  
};
