import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseConsentPageComponent } from '@jl/attorney/shared/base/esign/consent-page';
import { ESignService } from '@jl/common/core/services/esign.service';
import { ExternalResourcesService } from '@jl/common/core/services/external-resources.service';

/**
 * Consent page.
 */
@Component({
  selector: 'jlat-consent-page',
  templateUrl: './consent-page.component.html',
  styleUrls: ['./consent-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsentPageComponent extends BaseConsentPageComponent {

  /** @inheritdoc */
  public constructor(
    route: ActivatedRoute,
    eSignService: ESignService,
    externalResourcesService: ExternalResourcesService,
    router: Router,
  ) {
    super(route, eSignService, externalResourcesService, router);
  }
}
