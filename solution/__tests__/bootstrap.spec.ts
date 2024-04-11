import fs from "node:fs";
import { getAngularOption } from './test.utils';

describe('bootstrap-download', () => {
  test("bootstrap package should be downloaded", () => {
    const isBootstrap = fs.existsSync(
      "./node_modules/bootstrap"
    );

    expect(isBootstrap).toBeTruthy();
  });
});

describe('bootstrap-set', () => {
  test("bootstrap should be set in the styles array", () => {
    const styles = getAngularOption(
      "./angular.json",
      "projects.second-app.architect.build.options.styles"
    );

    const isBootstrap = styles.find( (style: string) => style.includes('bootstrap.') );

    expect(isBootstrap).toBeTruthy();
  });
});

describe('font-download', () => {
  test("font-awesome package should be downloaded", () => {
    const isBootstrap = fs.existsSync(
      "./node_modules/font-awesome"
    );

    expect(isBootstrap).toBeTruthy();
  });
});

describe('font-set', () => {
  test("font-awesome should be set in the styles array", () => {
    const styles = getAngularOption(
      "./angular.json",
      "projects.second-app.architect.build.options.styles"
    );

    const isBootstrap = styles.find( (style: string) => style.includes('font-awesome.') );

    expect(isBootstrap).toBeTruthy();
  });
});
