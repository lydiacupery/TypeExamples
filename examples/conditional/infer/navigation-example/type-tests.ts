import { deriveLabelAndPathFromUrl } from './function';

describe('deriveLabelAndPathFromUrl', () => {
  it('should error if the label is type label/label', () => {
    // @ts-expect-error should not allow label/label
    deriveLabelAndPathFromUrl('label1/label2');
  });
  it('should error if the label is not a valid label', () => {
    // @ts-expect-error should not allow invalid label
    deriveLabelAndPathFromUrl('not-a-label');
  });
  it('should error if the path does not end in a label', () => {
    // @ts-expect-error should not allow breadcrumb/breadcrumb
    deriveLabelAndPathFromUrl('breadcrumb1/breadcrumb2');
  });
  it('should pass if the path is a valid label', () => {
    const result = deriveLabelAndPathFromUrl('label1');
    expect(result?.label()).toEqual('overview');
    expect(result?.path()).toEqual([]);
  });
  it('should pass if the path is a valid breadcrumb followed by a label', () => {
    const result = deriveLabelAndPathFromUrl('breadcrumb1/label1');
    expect(result?.label()).toEqual('overview');
    expect(result?.path()).toEqual(['crm']);
  });
  it('should pass if the path is any number of valid breadcrumbs followed by a label', () => {
    const result = deriveLabelAndPathFromUrl(
      'breadcrumb1/breadcrumb2/breadcrumb3/label1'
    );
    expect(result?.label()).toEqual('overview');
    expect(result?.path()).toEqual(['crm', 'crm', 'crm']);
  });
  it('should pass when a label that is both a label and breadcrumb is used as a label', () => {
    const result = deriveLabelAndPathFromUrl('labelAndBreadcrumb1');
    expect(result?.label()).toEqual('Label and breadcrumb 1');
    expect(result?.path()).toEqual([]);
  });
  it('should pass when a label that is both a label and breadcrumb is used as a breadcrumb', () => {
    const result = deriveLabelAndPathFromUrl('labelAndBreadcrumb1/label1');
    expect(result?.label()).toEqual('Label 1');
    expect(result?.path()).toEqual(['Label and breadcrumb 1']);
  });
});
