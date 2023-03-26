export const RESTAURANT_MENU_URL =
  "https://instafood.onrender.com/api/menu?lat=28.5270362&lng=77.13593279999999&restaurantId=";

export const ALL_RESTAURANTS =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.898773&lng=77.5764094&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING";

export const CLOUDINARY_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const COMMENTS = [
  {
    name: "1st Comment",
    message: "this is  a test",
    replies: [
      {
        name: "1",
        message: "1st reply",
        replies: [
          {
            name: "2",
            message: "2nd reply",
            replies: [
              {
                name: "3",
                message: "3rd reply",
                replies: [
                  {
                    name: "4",
                    message: "4th reply",
                    replies: [
                      {
                        name: "5",
                        message: "5th reply",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "1.1 ",
    message: "1.1 st Comment",
    replies: [
      {
        name: "2.1 ",
        message: "2.1  Comment",
      },
    ],
  },
];
