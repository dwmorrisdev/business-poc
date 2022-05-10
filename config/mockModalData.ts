interface ModalItem {
  title: string;
  body: string;
  icon: string;
}


export const MockModalData: ModalItem[] = [
  {
    'title': "zero modal",
    'body': "Was this modal triggered some other way?",
    'icon': "hammer",
  },
  {
    'title': "Header 1",
    'body': "This is some content for the first modal.",
    'icon': "diamond",
  },
  {
    'title': "Header 2",
    'body': "This is some content for the second modal.",
    'icon': "account-tree",
  },
  {
    'title': "Header 3",
    'body': "This is some content for the third modal.",
    'icon': "auto-stories",
  },
];