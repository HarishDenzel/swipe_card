const RegistrationUser = {
  fullname: 'Full Name',
  gender: 'Gender',
  emailId: 'Email Address',
  phoneNumber: 'Phone Number',
  uploadPhoto: 'Profile Picture',
  aboutMe: 'About me',
  grading: 'Grading',
  playerstyle: 'Player Style',
};
const RegistrationUserPlaceholder = {
  fullname: 'Enter your full name',
  gender: 'Select the gender',
  emailId: 'Enter your email address',
  phoneNumber: ' Enter your phone number',
  uploadPhoto: 'Upload Photo',
  aboutMe: 'I have been playing badminton since...',
  grading: 'Enter Grade e.g., Division B (England)',
  playerstyle: 'Select the Player Style',
};
const RegistrationUserItemType = {
  fullname: false,
  gender: true,
  emailId: false,
  phoneNumber: false,
  uploadPhoto: true,
  aboutMe: false,
  grading: false,
  playerstyle: true,
};
const LoginUser = {
  username: 'Username',
  mobile_no: 'Mobile Number',
};
const NewClubLabel = {
  clubName: 'Club Name*',
  //clubPostCode: 'Club Post code*',
  clubInceptionDate: 'Club Inception Date',
  AboutClub: 'About My Club',
  clubPhoneNumber: 'Club Contact Number',
  clubEmail: 'Club Email Address',
  clubAddress: 'Club Address*',
};
const NewClubPlaceholder = {
  clubName: 'What is my club name?',
  //clubPostCode: 'Enter Postcode',
  clubInceptionDate: 'When was the club formed?',
  AboutClub: 'A description about my club',
  clubPhoneNumber: 'Enter Contact Number',
  clubEmail: 'Enter Email Address',
  clubAddress: 'Search for my club address',
  

  
};
const days = {
  Mon: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
  Tue: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
  Wed: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
  Thu: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
  Fri: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
  Sat: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
  Sun: {value:false,StartTime:'7:00 AM',endTime:'8:00 AM'},
};
const NewSessionLabel = {
  court: 'Select Booked Courts',
  PostCode: 'Venue Post Code*',
  Address: 'Venue Address*',
  About: "Message to the participants",
};
const NewSessionPlaceHolder = {
  court: 'Select the courts booked',
  PostCode: 'Enter Post Code',
  Address: 'Search for the venue address',
  About: 'Enter your message here.',
};
const AddMembersLabel ={
    name: 'Full Name*',
    email: 'Email Address*',
    // phone: 'Phone Number',
}
const AddMembersPlaceholder ={
    name: 'Enter Full Name',
    email: 'Enter Email Address',
    phone: 'Enter Phone Number',
}
export {
  RegistrationUser,
  RegistrationUserPlaceholder,
  RegistrationUserItemType,
  LoginUser,
  NewClubLabel,
  NewClubPlaceholder,
  days,
  NewSessionLabel,
  NewSessionPlaceHolder,
  AddMembersLabel,
  AddMembersPlaceholder

};
