import { Trans } from "@lingui/macro"
import React from "react"
import { ButtonPrimary } from "../../components/Button"
import {
  FormCard,
  FormCardHeader,
  FormCardFieldset,
  FormCardTitle,
  FormCardFooter,
} from "../../components/FormCard"
import {
  SkeletonFormRow,
  SkeletonSentence,
  SkeletonTextInput,
} from "../../components/Skeleton"

const GeneralSettingsFormLoader: React.FC = () => (
  <FormCard>
    <FormCardHeader>
      <FormCardTitle>
        <Trans id="settings.change">Change settings</Trans>
      </FormCardTitle>
    </FormCardHeader>
    <FormCardFieldset
      legend={<Trans id="settings.branding">Forum branding</Trans>}
    >
      <SkeletonFormRow
        label={<Trans id="settings.forum_name">Forum name</Trans>}
        control={
          <SkeletonTextInput>
            <SkeletonSentence words={[150, 120]} />
          </SkeletonTextInput>
        }
      />
    </FormCardFieldset>
    <FormCardFieldset
      legend={<Trans id="settings.forum_index">Forum index</Trans>}
    >
      <SkeletonFormRow
        label={<Trans id="settings.forum_name">Forum index title</Trans>}
        control={
          <SkeletonTextInput>
            <SkeletonSentence words={[100, 140]} />
          </SkeletonTextInput>
        }
        optional
      />
      <SkeletonFormRow
        label={<Trans id="settings.forum_name">Forum index header</Trans>}
        control={
          <SkeletonTextInput>
            <SkeletonSentence words={[120, 120]} />
          </SkeletonTextInput>
        }
        optional
      />
    </FormCardFieldset>
    <FormCardFooter>
      <ButtonPrimary disabled>
        <Trans id="save_changes">Save changes</Trans>
      </ButtonPrimary>
    </FormCardFooter>
  </FormCard>
)

export default GeneralSettingsFormLoader
