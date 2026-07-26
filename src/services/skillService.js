import defaultSkills from "../data/skills";

const STORAGE_KEY = "riddhi_skills";

export const getSkills = () => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSkills));
    return defaultSkills;
  }

  return JSON.parse(stored);
};

export const saveSkill = (skill) => {
  const skills = getSkills();

  const newSkill = {
    id: Date.now(),
    ...skill,
  };

  skills.push(newSkill);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
};

export const updateSkill = (updatedSkill) => {
  const skills = getSkills().map((skill) =>
    skill.id === updatedSkill.id ? updatedSkill : skill
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
};

export const deleteSkill = (id) => {
  const skills = getSkills().filter((skill) => skill.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
};