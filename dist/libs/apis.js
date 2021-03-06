"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hosts = require('./hosts.js');

exports.default = {
  url: "" + _hosts.Hosts.ApiHost[_hosts.Env],
  jsCode: "/api/open/wx/jscode2session",
  update: "/api/user/info/update",
  pay: "/api/order/pay/course",
  query: "/api/order/query/pay/course",
  course: "/api/resource/course/",
  courses: "/api/resource/courses",
  lesson: "/api/resource/lessons",
  video: "/api/resource/videos",
  collect: "/api/user/info/collection",
  operate: '/api/user/info/collection_course',
  lessonDetail: "/api/resource/lesson",
  banner: "/api/user/info/banner",
  myCourse: '/api/user/info/course',
  lessonList: '/api/resource/lessons_with_id',
  videoDetail: "/api/resource/video",
  playVideo: "/api/resource/video_play_count"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaXMuanMiXSwibmFtZXMiOlsidXJsIiwiSG9zdHMiLCJBcGlIb3N0IiwiRW52IiwianNDb2RlIiwidXBkYXRlIiwicGF5IiwicXVlcnkiLCJjb3Vyc2UiLCJjb3Vyc2VzIiwibGVzc29uIiwidmlkZW8iLCJjb2xsZWN0Iiwib3BlcmF0ZSIsImxlc3NvbkRldGFpbCIsImJhbm5lciIsIm15Q291cnNlIiwibGVzc29uTGlzdCIsInZpZGVvRGV0YWlsIiwicGxheVZpZGVvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7a0JBSWU7QUFDYkEsWUFBUUMsYUFBTUMsT0FBTixDQUFjQyxVQUFkLENBREs7QUFFYkMsVUFBUSw2QkFGSztBQUdiQyxVQUFRLHVCQUhLO0FBSWJDLE9BQUssdUJBSlE7QUFLYkMsU0FBTyw2QkFMTTtBQU1iQyxVQUFRLHVCQU5LO0FBT2JDLFdBQVMsdUJBUEk7QUFRYkMsVUFBUSx1QkFSSztBQVNiQyxTQUFPLHNCQVRNO0FBVWJDLFdBQVMsMkJBVkk7QUFXYkMsV0FBUyxrQ0FYSTtBQVliQyxnQkFBYyxzQkFaRDtBQWFiQyxVQUFRLHVCQWJLO0FBY2JDLFlBQVUsdUJBZEc7QUFlYkMsY0FBWSwrQkFmQztBQWdCYkMsZUFBYSxxQkFoQkE7QUFpQmJDLGFBQVc7QUFqQkUsQyIsImZpbGUiOiJhcGlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRW52LFxuICBIb3N0c1xufSBmcm9tICdAL2xpYnMvaG9zdHMnXG5leHBvcnQgZGVmYXVsdCB7XG4gIHVybDogYCR7SG9zdHMuQXBpSG9zdFtFbnZdfWAsXG4gIGpzQ29kZTogXCIvYXBpL29wZW4vd3gvanNjb2RlMnNlc3Npb25cIixcbiAgdXBkYXRlOiBcIi9hcGkvdXNlci9pbmZvL3VwZGF0ZVwiLFxuICBwYXk6IFwiL2FwaS9vcmRlci9wYXkvY291cnNlXCIsXG4gIHF1ZXJ5OiBcIi9hcGkvb3JkZXIvcXVlcnkvcGF5L2NvdXJzZVwiLFxuICBjb3Vyc2U6IFwiL2FwaS9yZXNvdXJjZS9jb3Vyc2UvXCIsXG4gIGNvdXJzZXM6IFwiL2FwaS9yZXNvdXJjZS9jb3Vyc2VzXCIsXG4gIGxlc3NvbjogXCIvYXBpL3Jlc291cmNlL2xlc3NvbnNcIixcbiAgdmlkZW86IFwiL2FwaS9yZXNvdXJjZS92aWRlb3NcIixcbiAgY29sbGVjdDogXCIvYXBpL3VzZXIvaW5mby9jb2xsZWN0aW9uXCIsXG4gIG9wZXJhdGU6ICcvYXBpL3VzZXIvaW5mby9jb2xsZWN0aW9uX2NvdXJzZScsXG4gIGxlc3NvbkRldGFpbDogXCIvYXBpL3Jlc291cmNlL2xlc3NvblwiLFxuICBiYW5uZXI6IFwiL2FwaS91c2VyL2luZm8vYmFubmVyXCIsXG4gIG15Q291cnNlOiAnL2FwaS91c2VyL2luZm8vY291cnNlJyxcbiAgbGVzc29uTGlzdDogJy9hcGkvcmVzb3VyY2UvbGVzc29uc193aXRoX2lkJyxcbiAgdmlkZW9EZXRhaWw6IFwiL2FwaS9yZXNvdXJjZS92aWRlb1wiLFxuICBwbGF5VmlkZW86IFwiL2FwaS9yZXNvdXJjZS92aWRlb19wbGF5X2NvdW50XCJcbn1cbiJdfQ==