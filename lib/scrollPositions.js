export const chapterScrollConfig = {
  snapChapters: ["chapter-00", "chapter-01", "chapter-06", "chapter-07"],
  freeFlowChapters: ["chapter-02", "chapter-03", "chapter-04", "chapter-05"],
};

export function isSnapChapter(id) {
  return chapterScrollConfig.snapChapters.includes(id);
}

