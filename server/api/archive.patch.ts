export default defineEventHandler(async (event) => {
  const { _id } = await readBody(event);

  const archivedProject = await archiveSchema.findById({ _id });

  if (!archivedProject)
    return {
      success: false,
      data: null,
      message: "Archyvuyotas projektas nerastas",
    };

  const currentDate = new Date();
  let expirationDate = new Date(currentDate);
  expirationDate.setDate(currentDate.getDate() + 30);
  const dateExparation = expirationDate.toISOString();

  archivedProject.dateExparation = dateExparation;
  const projectData = archivedProject.toObject();

  const project = new projectSchema(projectData);

  const data = await project.save();

  await archiveSchema.findByIdAndDelete({ _id });

  return {
    success: true,
    data: data,
    message: "Projektas perkeltas į projektus",
  };
});
