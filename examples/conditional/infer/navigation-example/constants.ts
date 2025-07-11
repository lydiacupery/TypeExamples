// imagine these are text keys with corresponding translation values

const sharedLabelAndBreadcrumbs = {
  labelAndBreadcrumb1: () => 'Label and breadcrumb 1',
  labelAndBreadcrumb2: () => 'Label and breadcrumb 2',
  labelAndBreadcrumb3: () => 'Label and breadcrumb 3',
};
export const labels = {
  label1: () => 'Label 1',
  label2: () => 'Label 2',
  label3: () => 'Label 3',
  label4: () => 'Label 4',
  label5: () => 'Label 5',
  ...sharedLabelAndBreadcrumbs,
};

export const breadcrumbs = {
  breadcrumb1: () => 'Breadcrumb 1',
  breadcrumb2: () => 'Breadcrumb 2',
  breadcrumb3: () => 'Breadcrumb 3',
  breadcrumb4: () => 'Breadcrumb 4',
  breadcrumb5: () => 'Breadcrumb 5',
  ...sharedLabelAndBreadcrumbs,
};
