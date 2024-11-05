using { my.baselineconfig as baselineconfig} from '../db/schema';

service BaselineconfigService {

  @cds.persistence.skip
  entity ConfigHeaders as projection on baselineconfig.ConfigHeaders;
}
